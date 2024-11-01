import requests

from config import VK_TOKEN, TG_TOKEN

async def get_data(channel):
    api_url = f'https://api.vk.com/method/groups.getById?group_id={channel_id}&access_token={token}&v=5.131'

    try:
        response = requests.get(api_url)
        response.raise_for_status()
        data = response.json()
        print(data)
    except Exception as e:
        print(e)