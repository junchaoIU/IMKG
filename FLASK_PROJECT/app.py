from flask import Flask
from flask_cors import *
from controller.IE_controller import IEModule

app = Flask(__name__)
CORS(app, supports_credentials=True)


app.register_blueprint(IEModule, url_prefix='/KG_IE')

@app.route('/')
def hello_world():
    return 'flask_test is running!!!'

if __name__ == '__main__':
    app.run(port=2525)