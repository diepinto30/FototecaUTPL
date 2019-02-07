from __future__ import unicode_literals
from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
# Create your models here.

class Actividades(models.Model):
    idactividad = models.AutoField(primary_key=True)
    #iduser = models.ForeignKey('AuthUser', db_column='iduser')
    iduser =  models.ForeignKey(User)
    idimagen = models.ForeignKey('Imagen', db_column='idimagen')
    comentario = models.CharField(max_length=300, blank=True, null=True)
    fecha_comentario = models.DateTimeField(auto_now_add=True)
    #compartir = models.IntegerField(blank=True, null=True)
    #fecha_compartido = models.DateField(blank=True, null=True)

    def __unicode__(self):
        return "%s - %s -%s " % (self.iduser, self.idimagen, self.comentario) #, self.fecha_comentario, self.compartir, self.fecha_compartido)

class Autor(models.Model):
    idautor = models.AutoField(primary_key=True)
    nombreautor = models.CharField(max_length=100)
    apellidoautor = models.CharField(max_length=100)
    nacionalidad = models.CharField(max_length=50, blank=True, null=True)
    correo = models.CharField(max_length=80)

    def __unicode__(self):
        return "%s - %s -%s - %s -%s" % (self.idautor, self.nombreautor, self.apellidoautor, self.nacionalidad, self.correo)


class Categoria(models.Model):
    idcategoria = models.AutoField(primary_key=True)
    nombre = models.CharField(unique=True, max_length=60)
    descripcion = models.CharField(max_length=250, blank=True, null=True)


    def __unicode__(self):
        return "%s - %s -%s" % (self.idcategoria, self.nombre, self.descripcion)


class Imagen(models.Model):
    idimagen = models.AutoField(primary_key=True)
    iduser = models.ForeignKey(User)
    nombre = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=300, blank=True, null=True)
    hayrostros = models.NullBooleanField()
    direccion = models.CharField(max_length=300, blank=True, null=True)
    foto = models.ImageField(upload_to='portal/imgs')
    pais = models.CharField(max_length=200, blank=True, null=True)
    ciudad = models.CharField(max_length=300, blank=True, null=True)
    latitud = models.CharField(max_length=30)
    longitud = models.CharField(max_length=30)
    dimenciones = models.CharField(max_length=100)
    Tecnica = models.CharField(max_length=100)
    #likes = models.ManyToManyField(User, related_name='like_view')
    likes = models.IntegerField(default=0)
    fecha_publicacion = models.DateField('solved time', default=timezone.now)
    fecha_tomada = models.DateField('solved time', default=timezone.now)
    idlicencia = models.ForeignKey('Tipolicencia', db_column='idlicencia')
    #idcategoria = models.ForeignKey('Categoria', db_column='idcategoria')

    def publish(self):
        self.fecha_publicacion = timezone.now()
        self.save()

    @property
    def total_likes(self):
        return self.likes.count()

    def __unicode__(self):
        return "%s - %s, %s - %s - %s" % (self.nombre, self.ciudad, self.direccion, self.fecha_publicacion, self.fecha_tomada)

class ImagenHasAutores(models.Model):
    idpropiedad = models.AutoField(primary_key=True)
    idimagen = models.ForeignKey(Imagen, db_column='idimagen')
    idautor = models.ForeignKey(Autor, db_column='idautor')


    def __unicode__(self):
        return "%s - %s" % (self.idimagen, self.idautor)


class ImagenHasCategorias(models.Model):
    idtipo = models.AutoField(primary_key=True)
    idimagen = models.ForeignKey(Imagen, db_column='idimagen')
    idcategoria = models.ForeignKey(Categoria, db_column='idcategoria')


    def __unicode__(self):
        return "%s - %s" % (self.idimagen, self.idcategoria)





class Megusta(models.Model):
    #idmegusta = models.AutoField(primary_key=True)
    #iduser = models.IntegerField()
    iduser = models.ForeignKey(User)
    idimagen = models.ForeignKey(Imagen)
    #me_gusta = models.NullBooleanField()
    fecha_megusta = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return "%s - %s " % (self.iduser, self.idimagen)  #, self.me_gusta, self.fecha_megusta)

class Tipolicencia(models.Model):
    idtiplic = models.AutoField(primary_key=True)
    nombre = models.CharField(unique=True, max_length=150)
    descripcion = models.CharField(max_length=300, blank=True, null=True)

    def __unicode__(self):
        return "%s - %s - %s" % (self.idtiplic, self.nombre, self.descripcion)


class AuthUser(models.Model):
    username = models.CharField(unique=True, max_length=30)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.CharField(max_length=254)
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField('solved time', default=timezone.now)
    is_superuser = models.BooleanField()
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField('solved time', default=timezone.now)



    def __unicode__(self):
        return "%s - %s - %s - %s - %s" % (self.username, self.first_name, self.last_name, self.email, self.password)


class User(models.Model):
    iduser = models.AutoField(primary_key=True)
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField('solved time', default=timezone.now)
    is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=30)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.CharField(max_length=254)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField('solved time', default=timezone.now)



    def __unicode__(self):
        return "%s -%s - %s - %s - %s - %s" % (self.iduser, self.username, self.first_name, self.last_name, self.email, self.password)





