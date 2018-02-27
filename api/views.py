from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Level, Topic, Article
from .serializers import LevelSerializers, TopicSerializers, ArticleSerializers


class LevelAPIView(APIView):
    def get(self, request):
        serializer = LevelSerializers(Level.objects.all(), many=True, context={'request': request})
        return Response(serializer.data)


class TopicAPIView(APIView):
    def get(self, request, pk=None):
        if pk:
            serializer = TopicSerializers(Topic.objects.get(pk=pk), context={'request': request})
        else:
            serializer = TopicSerializers(Topic.objects.all(), many=True, context={'request': request})
        return Response(serializer.data)


class ArticleAPIView(APIView):
    def get(self, request, pk=None):
        if pk:
            serializer = ArticleSerializers(Article.objects.get(pk=pk), context={'request': request})
        else:
            serializer = ArticleSerializers(Article.objects.all(), many=True, context={'request': request})
        return Response(serializer.data)
