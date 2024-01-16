from flask import Flask, make_response, jsonify, request, json
from flask_cors import CORS
from db import Projetos
import psycopg2

mydb = psycopg2.connect(
    host='localhost',
    user='mainuser',
    password='mainpassword',
    database='portfolio-db',
    )

app = Flask(__name__)
CORS(app)
app.config['JSON_SORT_KEYS'] = False


@app.route('/projetos', methods=['GET'])
def get_projetos():
    return make_response(jsonify(mensagem='Lista de projetos.', data=Projetos))


@app.route('/projetos', methods=['POST'])
def create_projeto():
    projeto = request.json
    Projetos.append(projeto)
    return make_response(jsonify(mensagem='Projeto cadastrado com sucesso.', projeto=projeto))


if __name__ == "__main__":
    app.run(debug=True)
