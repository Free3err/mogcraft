import requests
from starlette.responses import Response

from config import VK_TOKEN, TG_TOKEN


class Socials:
    def get_data(self, social, channel_url, owner_url):
        group_name = None
        owner_name = None
        if social == 'vk':
            group_api_url = f'https://api.vk.com/method/groups.getById?group_id={channel_url.split('/')[-1]}&access_token={VK_TOKEN}&v=5.131'
            owner_api_url = f'https://api.vk.com/method/users.get?user_ids={owner_url.split('/')[-1]}&access_token={VK_TOKEN}&v=5.131'
            try:
                response_group = requests.get(group_api_url)
                response_owner = requests.get(owner_api_url)
                response_group.raise_for_status()
                response_owner.raise_for_status()
                group_name = response_group.json()['response'][0]['name']
                owner_name = f"{response_owner.json()['response'][0]['first_name']} {response_owner.json()['response'][0][
                    'last_name']}"
            except requests.exceptions.RequestException as e:
                return {"ok": False, "shortError": "Invalid request by server"}
        elif social == 'telegram':
            group_api_url = f'https://api.telegram.org/bot{TG_TOKEN}/getChat?chat_id={channel_url}'
            owner_api_url = f'https://api.telegram.org/bot{TG_TOKEN}/getChat?chat_id={owner_url}'
            try:
                response_group = requests.get(group_api_url)
                response_owner = requests.get(owner_api_url)
                response_owner.raise_for_status()
                response_group.raise_for_status()
                group_name = response_group.json()['result']['title']
                owner_name = response_owner.json()['result']['first_name']
            except requests.exceptions.RequestException as e:
                return {"ok": False, "shortError": "Invalid request by server"}



        if group_name and owner_name:
            return {"ok": True, "data": {"owner_name": owner_name, "group_name": group_name}, "sysMsg": "OK"}
        return {"ok": True, "data": {"owner_name": owner_name, "group_name": group_name}, "sysMsg": "Some data hasn't got"}
