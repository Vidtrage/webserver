from django.db import models


class User(models.Model):
    name = models.CharField(max_length=300)


class Episode(models.Model):
    """
    A video containing zero or more ad slots
    """
    file_name = models.CharField(max_length=300)
    description = models.TextField(name='description', blank=True)
    user = models.ForeignKey(User)


class Ad(models.Model):
    name = models.CharField(max_length=300)
    file_name = models.CharField(max_length=300)
    description = models.TextField()
    length = models.IntegerField()
    user = models.ForeignKey(User)


class Slot(models.Model):
    """
    A time frame used to project an ad
    In the future, a time-slot may have more than on add, in different locations
    """
    start_time = models.TimeField()
    length = models.IntegerField()
    episode = models.ForeignKey(Episode)

#
# class PopulatedSlot(models.Model):
#     """
#     Many to many relation between episode-slot and ad
#     """
#     status = models.IntegerField()
#     ad = models.ForeignKey(Ad)
#     slot = models.ForeignKey(Slot)
#     rendered_file_path = models.CharField(max_length=300)