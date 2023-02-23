import tensorflow as tf
from flask import Flask, jsonify, request
from keras.models import load_model
import pickle
import sklearn


nb = pickle.load(open('ml/naive_bayes.pkl', 'rb'))


app = Flask(__name__)

# load all dnn models
model_ffnn = load_model('dnn/nn_model/')
model_lstm = load_model('dnn/model_lstm/')
model_gru = load_model('dnn/model_gru/')
# load all nlp models


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/predict', methods=['GET'])
def predict():
    data = request.args.get('data')

    lstm = int(tf.squeeze(tf.round(model_lstm.predict([data]))).numpy())
    gru = int(tf.squeeze(tf.round(model_gru.predict([data]))).numpy())
    ffnn = int(tf.squeeze(tf.round(model_ffnn.predict([data]))).numpy())

    result = {
        'lstm': lstm,
        'gru': gru,
        'ffnn': ffnn

    }
    return jsonify(result)


@app.route('/predict/nb', methods=['GET'])
def predict_nb():
    data = request.args.get('data')
    result = nb.predict([data])[0]
    return jsonify({
        'result': int(result)
    })


if __name__ == '__main__':
    app.run()
