from django.contrib import admin

# Register your models here.
from portal.models import *
admin.site.register(Actividades)
admin.site.register(Autor)
admin.site.register(Categoria)
admin.site.register(Imagen)
admin.site.register(ImagenHasAutores)
admin.site.register(ImagenHasCategorias)
admin.site.register(Megusta)
admin.site.register(Tipolicencia)