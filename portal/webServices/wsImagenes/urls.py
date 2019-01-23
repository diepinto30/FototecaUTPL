from django.conf.urls import include, url, patterns

urlpatterns = patterns('portal.webServices.wsImagenes.views',
    url(r'ws/imagenes/(?P<id>\d+)$','wsImagenes_view1',name="ws_imagenes_url"),
    url(r'ws/imagenes/$','wsImagenes_view',name="ws_imagenes_url"),
)