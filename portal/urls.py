from django.conf.urls import include, url, patterns
from . import views
from portal.views import monumentos_list, ImgMonu_edit, listado_fotosCelulas, login_required, murales, register

from django.conf.urls import url, include
from django.contrib.auth import views as auth_views



#from django.contrib.auth.views import login


from django.contrib.auth.views import (
    login, logout, password_reset, password_reset_done, password_reset_confirm, password_reset_complete #, monumentos_edit
)

urlpatterns = patterns('portal.views',
	url(r'^$', 'home_page', name='home'),
	#url(r'^formulario/$', register, name='register'),
	url(r'^login/$', login, {'template_name':'internas/login.html'}, name='login'),
	#url(r'^login/$', 'login_home', name='login'),
	url(r'^signup/$',views.signup, name='signup'),
	url(r'^logout/$', 'logout_view', name='logout_view'),
	url(r'^reconoce/$', 'listado_fotos', name='listado_fotos'),
	url(r'^colecciones/$', listado_fotosCelulas, name='listado_fotosCelulas'),
	url(r'^celulas/$', 'celulas', name='celulas'),
	url(r'^murales/$', murales, name='murales'),
	url(r'^monumentos/$', 'monumentos_list', name='monumentos_list'),
	url(r'^editar/(?P<idimagen>\d+)$', ImgMonu_edit, name='monumentos_edit'),
	#url(r'^like_category/$', views.like_category, name='like_category'),
	url(r'^like/$', login_required(views.like), name='like'),
	#url(r'foto/(?P<id>\d+)$', views.foto, name='foto'),
	#url(r'^api/sacardata$', 'sacar_data', name='sacar_data'),
	#url(r'^api/sacarlugares$', 'listarlugares', name='json'),
	#url(r'^mapa', 'mapa_view', name='mapa'),
	#url(r'^estadistica', 'estadistica_view', name='estadistica'),
	#url(r'^tablas', 'data_table', name='tables'),
	)

