from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from portal.models import Imagen

class RegistrationForm(UserCreationForm):
	email=forms.EmailField(required=True)
	
	class Meta:
		model=User
		fields = {
			'username',
			'first_name',
			'last_name',
			'email',
			'password1',
			'password2'
		}


	def save(self,commit=True):
		user=super(RegistrationForm,self).save(commit=False)
		user.first_name=self.cleaned_data['first_name']
		user.last_name=self.cleaned_data['last_name']
		user.email=self.cleaned_data['email']

		if commit:
			user.save()

		return user


class LoginFrom(forms.Form):
	username = forms.CharField()
	password = forms.CharField(widget=forms.PasswordInput())


class ImgForm(forms.ModelForm):

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
			'nombre': 'Nombre',
			'descripcion': 'Descripcion',
			'hayrostros': 'Existe algun rostro',
			'direccion': 'Ubicacion de imagen',
			'pais': 'Pais',
			'ciudad': 'Ciudad',
			'latitud': 'Latitud',
			'longitud': 'Longitud',
			'dimenciones': 'Dimenciones en el caso que sean un mural',
			'Tecnica': 'Tecnica o tipo de expresion de la imagen',
		}
		widgets = {
			'nombre':forms.TextInput(attrs={'class':'form-control'}),
			'descripcion':forms.TextInput(attrs={'class':'form-control'}),
			'hayrostros':forms.Select(attrs={'class':'form-control'}),
			'direccion':forms.TextInput(attrs={'class':'form-control'}),
			'pais':forms.TextInput(attrs={'class':'form-control'}),
			'ciudad':forms.TextInput(attrs={'class':'form-control'}),
			'latitud':forms.TextInput(attrs={'class':'form-control'}),
			'longitud':forms.TextInput(attrs={'class':'form-control'}),
			'dimenciones':forms.TextInput(attrs={'class':'form-control'}),
			'Tecnica':forms.TextInput(attrs={'class':'form-control'}),
		}
