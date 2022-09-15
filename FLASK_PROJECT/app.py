from flask import Flask
from flask_cors import *
from controller.IE_controller import IEModule
from controller.QA_controller import QAModule
from gevent import pywsgi

app = Flask(__name__)
CORS(app, supports_credentials=True)


app.register_blueprint(IEModule, url_prefix='/KG_IE')
app.register_blueprint(QAModule, url_prefix='/KG_QA')

@app.route('/')
def hello_world():
    return 'flask_test is running!!!'

if __name__ == '__main__':
    # app.run(port=5000)
    server = pywsgi.WSGIServer(('0.0.0.0', 5000), app)
    server.serve_forever()