from rest_framework import viewsets
from rest_framework.response import Response

from .models import Product
from .serializers import ProductSerializer


class ProductViewSet(viewsets.ViewSet):
    def list(self, request):  # /api/products
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    def create(self, request):  # /api/products
        pass

    def get(self, request, pk=None):  # /api/products/:id
        pass

    def update(self, request, pk=None):  # /api/products/:id
        pass

    def delete(self, request, pk=None):  # /api/products/:id
        pass
