from django import forms
from django.contrib.auth.models import User
from portal.models import Actividades
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.forms import UserCreationForm


class SignUpForm(UserCreationForm):
    first_name = forms.CharField(max_length=30, required=False)
    last_name = forms.CharField(max_length=30, required=False)
    email = forms.EmailField(max_length=254)

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'password1', 'password2', )

class LoginFrom(forms.Form):
	username = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))
	password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control'}))


class CommitForm(forms.ModelForm):
    iduser = forms.CharField(max_length=30, required=False)
    idimagen = forms.CharField(max_length=30, required=False)
    comentario = forms.CharField(max_length=30, required=False)
    class Meta:
        model = Actividades
        fields = ['iduser', 'idimagen', 'comentario']
        labels = {'iduser':'user', 'idimagen':'img', 'comentario':'comentario',}
        widgets = {
            'iduser': forms.TextInput(attrs={'class':'form-control'}),
            'idimagen': forms.TextInput(attrs={'class':'form-control'}),
            'comentario': forms.TextInput(attrs={'class':'form-control'})
        }
