# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.utils.timezone
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Actividades',
            fields=[
                ('idactividad', models.AutoField(serialize=False, primary_key=True)),
                ('comentario', models.CharField(max_length=300, null=True, blank=True)),
                ('fecha_comentario', models.DateField(null=True, blank=True)),
                ('compartir', models.IntegerField(null=True, blank=True)),
                ('fecha_compartido', models.DateField(null=True, blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='AuthUser',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('password', models.CharField(max_length=128)),
                ('last_login', models.DateTimeField(default=django.utils.timezone.now, verbose_name='solved time')),
                ('is_superuser', models.BooleanField()),
                ('username', models.CharField(unique=True, max_length=30)),
                ('first_name', models.CharField(max_length=30)),
                ('last_name', models.CharField(max_length=30)),
                ('email', models.CharField(max_length=254)),
                ('is_staff', models.BooleanField()),
                ('is_active', models.BooleanField()),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='solved time')),
            ],
        ),
        migrations.CreateModel(
            name='Autor',
            fields=[
                ('idautor', models.AutoField(serialize=False, primary_key=True)),
                ('nombreautor', models.CharField(max_length=100)),
                ('apellidoautor', models.CharField(max_length=100)),
                ('nacionalidad', models.CharField(max_length=50, null=True, blank=True)),
                ('correo', models.CharField(max_length=80)),
            ],
        ),
        migrations.CreateModel(
            name='Categoria',
            fields=[
                ('idcategoria', models.AutoField(serialize=False, primary_key=True)),
                ('nombre', models.CharField(unique=True, max_length=60)),
                ('descripcion', models.CharField(max_length=250, null=True, blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Imagen',
            fields=[
                ('idimagen', models.AutoField(serialize=False, primary_key=True)),
                ('nombre', models.CharField(max_length=100)),
                ('descripcion', models.CharField(max_length=300, null=True, blank=True)),
                ('hayrostros', models.NullBooleanField()),
                ('direccion', models.CharField(max_length=300, null=True, blank=True)),
                ('foto', models.ImageField(upload_to='imgs')),
                ('pais', models.CharField(max_length=200, null=True, blank=True)),
                ('ciudad', models.CharField(max_length=300, null=True, blank=True)),
                ('latitud', models.CharField(max_length=30)),
                ('longitud', models.CharField(max_length=30)),
                ('fecha_publicacion', models.DateField(default=django.utils.timezone.now, verbose_name='solved time')),
                ('fecha_tomada', models.DateField(default=django.utils.timezone.now, verbose_name='solved time')),
            ],
        ),
        migrations.CreateModel(
            name='ImagenHasAutores',
            fields=[
                ('idpropiedad', models.AutoField(serialize=False, primary_key=True)),
                ('idautor', models.ForeignKey(to='portal.Autor', db_column='idautor')),
                ('idimagen', models.ForeignKey(to='portal.Imagen', db_column='idimagen')),
            ],
        ),
        migrations.CreateModel(
            name='ImagenHasCategorias',
            fields=[
                ('idtipo', models.AutoField(serialize=False, primary_key=True)),
                ('idcategoria', models.ForeignKey(to='portal.Categoria', db_column='idcategoria')),
                ('idimagen', models.ForeignKey(to='portal.Imagen', db_column='idimagen')),
            ],
        ),
        migrations.CreateModel(
            name='Megusta',
            fields=[
                ('idmegusta', models.AutoField(serialize=False, primary_key=True)),
                ('me_gusta', models.NullBooleanField()),
                ('fecha_megusta', models.DateField(null=True, blank=True)),
                ('idimagen', models.ForeignKey(to='portal.Imagen', db_column='idimagen')),
                ('iduser', models.OneToOneField(to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Tipolicencia',
            fields=[
                ('idtiplic', models.AutoField(serialize=False, primary_key=True)),
                ('nombre', models.CharField(unique=True, max_length=150)),
                ('descripcion', models.CharField(max_length=300, null=True, blank=True)),
            ],
        ),
        migrations.AddField(
            model_name='imagen',
            name='idlicencia',
            field=models.ForeignKey(to='portal.Tipolicencia', db_column='idlicencia'),
        ),
        migrations.AddField(
            model_name='imagen',
            name='iduser',
            field=models.ForeignKey(to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='actividades',
            name='idimagen',
            field=models.ForeignKey(to='portal.Imagen', db_column='idimagen'),
        ),
        migrations.AddField(
            model_name='actividades',
            name='iduser',
            field=models.OneToOneField(to=settings.AUTH_USER_MODEL),
        ),
    ]
