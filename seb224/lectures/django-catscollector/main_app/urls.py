    # import Home view from the views file
from .views import Home, CatList, CatDetail
from django.urls import path

urlpatterns = [
    path('', Home.as_view(), name='home'),
    path('cats/', CatList.as_view(), name='cat-list'),
    path('cats/<int:id>/', CatDetail.as_view(), name='cat-detail'),
]