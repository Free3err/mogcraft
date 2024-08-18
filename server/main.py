import os

if __name__ == "__main__":
    current_directory = os.path.dirname(os.path.abspath(__file__))
    file_path = os.path.join(current_directory, 'api', 'routes.py')

    os.system(f'python "{file_path}"')
