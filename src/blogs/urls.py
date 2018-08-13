from django.conf.urls import url

from blogs.views.index import IndexView

urlpatterns = [
    url(r'^', IndexView.as_view(), name="index"),
]