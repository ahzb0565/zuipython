from django.urls import path
from .views import LevelAPIView, TopicAPIView, ArticleAPIView


app_name = 'api'

urlpatterns = [
    path('levels/', LevelAPIView.as_view(), name='level-list'),
    path('topics/', TopicAPIView.as_view(), name='topic-list'),
    path('topic/<int:pk>/', TopicAPIView.as_view(), name='topic-detail'),
    path('articles/', ArticleAPIView.as_view(), name='article-list'),
    path('article/<int:pk>', ArticleAPIView.as_view(), name='article-detail'),
]
