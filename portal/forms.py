from django import forms
from django.contrib.auth.models import User
from portal.models import Actividades, Imagen
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.forms import UserCreationForm


class SignUpForm(UserCreationForm):
    first_name = forms.CharField(max_length=30, required=False)
    last_name = forms.CharField(max_length=30, required=False)
    email = forms.EmailField(max_length=254)

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'password1', 'password2', )


class LoginFrom(forms.ModelForm):
	username = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))
	password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control'}))
        class Meta:
            model = User
            fields = ('username', 'password')


class ColeccionesForm(forms.ModelForm):
    CHOICES = (
        ('1', 'Desconocido'),
        ('2', 'Si'),
        ('3', 'No'),
    )

    nombre = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))
    descripcion = forms.CharField(widget=forms.Textarea(attrs={'class': 'form-control'}))
    hayrostros = forms.ChoiceField(widget=forms.Select(attrs={'class': 'custom-select'}), choices=CHOICES)
    direccion = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))
    pais = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))
    ciudad = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))
    latitud = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))
    longitud = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))
    dimenciones = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))
    Tecnica = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))
    class Meta:
        model = Imagen

        fields = [
            'nombre',
            'descripcion',
            'hayrostros',
            'direccion',
            'pais',
            'ciudad',
            'latitud',
            'longitud',
            'dimenciones',
            'Tecnica',
        ]
        labels = {
            'nombre': 'Nombre de la imagen',
            'descripcion': 'Descripcion',
            'hayrostros': 'Existe algun rostro',
            'direccion': 'Direccion',
            'pais': 'Pais',
            'ciudad':'Ciudad',
            'latitud':'Latitud',
            'longitud':'Longitud',
            'dimenciones':'Dmenciones',
            'Tecnica':'Tecnica',
        }


class CommitsForm(forms.ModelForm):
    class Meta:
        model = Actividades
        fields = ['iduser', 'idimagen', 'comentario']
        labels = {'iduser': 'user', 'idimagen': 'img', 'comentario': 'comentario'}
        widgets = {
            'iduser': forms.TextInput(attrs={'class':'form-control'}),
            'idimagen': forms.TextInput(attrs={'class':'form-control'}),
            'comentario': forms.Textarea(attrs={'rows': 3, 'class':'form-control'})
        }