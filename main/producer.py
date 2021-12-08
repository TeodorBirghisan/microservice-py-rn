import pika
import json

params = pika.URLParameters(
    'amqps://keiehpjx:Rz3jaZft22mK71n-u_Vlvz1ihRZqa7i0@rat.rmq2.cloudamqp.com/keiehpjx')

connection = pika.BlockingConnection(params)

channel = connection.channel()


def publish(method, body):
    properties = pika.BasicProperties(method)
    channel.basic_publish(exchange='', routing_key='admin',
                          body=json.dumps(body), properties=properties)
