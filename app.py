from flask import Flask, render_template, request
from werkzeug.utils import secure_filename
from flask_cors import CORS
import os
import json

app  = Flask(__name__)
CORS(app)

upload_folder = os.path.join('static', 'uploads')
app.config['UPLOAD'] = upload_folder

@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        if request.is_json == True:
            data = request.get_json()
            print("{}: {}".format(data['type'], data['data']))
            return "<h1>Successfully entered text</h1>"
        else:
            file = request.files['img']
            filename = secure_filename(file.filename)
            print(filename)
            img = os.path.join(app.config['UPLOAD'], filename)
            file.save(img)
    return render_template('index.html')

if __name__ == "__main__":
    app.run()