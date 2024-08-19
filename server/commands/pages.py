import json
import os

def get_data(path: str):
    print(path)
    directories_of_path = path.split('/')

    script_dir = os.path.dirname(__file__)
    file_path = os.path.join(script_dir, '..', 'data', 'pages', f'{directories_of_path[0]}.json')

    file_path = os.path.normpath(file_path)

    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            text = json.load(file)

            for directory in directories_of_path[1::]:
                try:
                    directory = int(directory)
                except:
                    pass

                text = text[directory]
            
            return text
    
    except Exception as e:
        return f'Ошибка {e}'