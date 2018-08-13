from django.views import generic

from blogs.views import BaseView


class IndexView(BaseView, generic.TemplateView):
    template_name = 'base.html'
