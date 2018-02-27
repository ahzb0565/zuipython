from rest_framework import serializers
from .models import Level, Topic, Article


class LevelSerializers(serializers.ModelSerializer):
    topics = serializers.HyperlinkedRelatedField(
        many=True,
        read_only=True,
        view_name='api:topic-detail'
    )

    class Meta:
        model = Level
        fields = ('value', 'description', 'topics')


class TopicSerializers(serializers.ModelSerializer):
    articles = serializers.HyperlinkedRelatedField(
        many=True,
        read_only=True,
        view_name='api:article-detail'
    )

    class Meta:
        model = Topic
        fields = ('name', 'articles')


class ArticleSerializers(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'
