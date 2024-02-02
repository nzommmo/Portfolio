from flask import Flask,render_template,request
import smtplib
app = Flask(portfolio)
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit_form' methods=['POST'])