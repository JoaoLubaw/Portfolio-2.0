# APP_API/backend/wsgi.py

import os
import sys

if os.environ.get('ENV') == 'production':
    sys.path.append(os.path.dirname(os.path.dirname(__file__)))

# Adiciona o diretório raiz do projeto ao caminho de pesquisa de módulos do Python
sys.path.append(os.path.join(os.path.dirname(__file__), 'APP_API', 'api_portfolio'))

from django.core.wsgi import get_wsgi_application

# Configuração do ambiente Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

# Configure a aplicação WSGI
application = get_wsgi_application()
