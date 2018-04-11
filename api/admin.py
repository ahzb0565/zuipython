from django.contrib import admin
from .models import Level, Topic, Article

# Register your models here.


@admin.register(Level)
class LevelAdmin(admin.ModelAdmin):
    list_display = ('value', 'description')


@admin.register(Topic)
class TopicAdmin(admin.ModelAdmin):
    list_display = ('name', 'level')


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'topic', 'updated_time')
