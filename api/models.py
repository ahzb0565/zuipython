from django.db import models


class Level(models.Model):
    value = models.IntegerField(primary_key=True)
    description = models.TextField()

    def __str__(self):
        return 'Level {}'.format(self.value)


class Topic(models.Model):
    name = models.CharField(max_length=100)
    level = models.ForeignKey(Level, on_delete=models.CASCADE, related_name='topics')

    def __str__(self):
        return 'Topic {} of {}'.format(self.name, self.level)


class Article(models.Model):
    title = models.CharField(max_length=100)
    body = models.TextField()
    created_time = models.DateTimeField(auto_now_add=True)
    updated_time = models.DateTimeField(auto_now=True)

    topic = models.ForeignKey(Topic, on_delete=models.CASCADE, related_name='articles')

    def __str__(self):
        return self.title
