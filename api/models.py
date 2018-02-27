from django.db import models


class Level(models.Model):
    value = models.IntegerField(primary_key=True)
    description = models.TextField()


class Topic(models.Model):
    name = models.CharField(max_length=100)
    level = models.ForeignKey(Level, on_delete=models.CASCADE, related_name='topics')


class Article(models.Model):
    title = models.CharField(max_length=100)
    body = models.TextField()
    created_time = models.DateTimeField(auto_now_add=True)
    updated_time = models.DateTimeField(auto_now=True)

    topic = models.ForeignKey(Topic, on_delete=models.CASCADE, related_name='articles')
