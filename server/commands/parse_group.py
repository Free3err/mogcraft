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
    

def get_name(url):
    channel_id = url.split('/')[-1]

    if 'vk.com' in url:
        token=get_token('vk')

        api_url = f'https://api.vk.com/method/groups.getById?group_id={channel_id}&access_token={token}&v=5.131'

        try:
            response = requests.get(api_url)
            response.raise_for_status()

            data = response.json()
            group_info = data['response'][0]
            group_name = group_info['name']
            return group_name
            
        except Exception as e:
            print(e)

    if 't.me' in url:
        token=get_token('telegram')

        api_url = f'https://api.telegram.org/bot{token}/getChat?chat_id=@{channel_id}'

        try:
            response = requests.get(api_url)
            response.raise_for_status()

            data = response.json()
            if data['ok']:
                group_info = data['result']
                group_name = group_info['title']
                return group_name
            
            return 'Ошибка'
        
        except Exception as e:
            return 'Ошибка'
        

def get_posts(url):
    channel_id = url.split('/')[-1]

    token = get_token('telegram')
    api_url = f'https://api.telegram.org/bot{token}/getUpdates'

    try:
        response = requests.get(api_url)
        response.raise_for_status()

        posts = []

        data = response.json()
        if data['ok']:
            for json_data in data['result']:
                if "channel_post" in json_data:
                    post = json_data['channel_post']
                    author = post.get('author_signature', 'Не указано')
                    text = post.get('text', 'Нет текста')
                    date = post.get('date')

                    posts.append({
                            'author': author,
                            'text': text,
                            'date': date
                        })
                    
        posts.sort(key=lambda x: x['date'], reverse=True)
        return posts
    
    except Exception as e:
        return f'Ошибка'
