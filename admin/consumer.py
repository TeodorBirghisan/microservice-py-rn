import pika
import json
import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "admin.settings")
django.setup()

from products.models import Product

params = pika.URLParameters(
    'amqps://keiehpjx:Rz3jaZft22mK71n-u_Vlvz1ihRZqa7i0@rat.rmq2.cloudamqp.com/keiehpjx')

connection = pika.BlockingConnection(params)

channel = connection.channel()

channel.queue_declare(queue='admin')


def callback(ch, method, properties, body):
    print('Recieved in admin')
    data = json.loads(body)
    print(data)
    product = Product.objects.get(id=data)
    product.likes = product.likes + 1
    product.save()
    print('product likes increased!')


channel.basic_consume(
    queue='admin', on_message_callback=callback, auto_ack=True)

print('Started consuming')

channel.start_consuming()

channel.close()
