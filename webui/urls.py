from django.conf.urls import patterns, url

from webui import views

urlpatterns = patterns('',
                       url(r'^$', views.login, name='login'),
                       url(r'^login$', views.login, name='login'),
                       url(r'^tap$', views.tap, name='tap'),
                       )