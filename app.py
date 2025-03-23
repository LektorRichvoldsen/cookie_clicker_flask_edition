from flask import Flask, render_template
import config
from database import get_top_ten

print(config.PWD)

app = Flask(__name__)

@app.route('/', methods=['POST', 'GET'] )
def index():
    
    return render_template("index.html", items = get_top_ten())

@app.route('/save', methods=['POST'])
def save():
    return render_template("lagreScore.html")

if __name__ == '__main__':
    app.run(debug = True)
