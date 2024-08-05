import requests
import os
from dotenv import load_dotenv

def get_token(service):
    dotenv_path = os.path.join(os.path.dirname(__file__), '..', '.env')
    load_dotenv(dotenv_path)
    
    if service == 'vk':
        return os.getenv('VK_TOKEN')
    if service == 'telegram':
        return os.getenv('TG_TOKEN')

def get_name(profile_url):

    if 'vk.com' in profile_url:
        token=get_token('vk')
        username = profile_url.split('/')[-1]
    
        api_url = f'https://api.vk.com/method/users.get?user_ids={username}&access_token={token}&v=5.131'
    
        try:
            response = requests.get(api_url)
            response.raise_for_status()
            
            data = response.json()
            user_info = data['response'][0]
            name = f"{user_info['first_name']} {user_info['last_name']}"

            return name
            
        except Exception as e:
            return "Ошибка"
        
    if 'tg' in profile_url:
        token=get_token('telegram')
        chat_id = profile_url.split('id=')[-1]

        api_url = f'https://api.telegram.org/bot{token}/getChat?chat_id={chat_id}'
        
        try:
            response = requests.get(api_url)
            response.raise_for_status()
        
            data = response.json()
            if data['ok']:
                user_info = data['result']
                full_name = f"{user_info.get('first_name', '')} {user_info.get('last_name', '')}".strip()
                return full_name
            
            return 'Ошибка'
        
        except Exception as e:
            return "Ошибка"