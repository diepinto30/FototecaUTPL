from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.forms import UserCreationForm


class RegistrationForm(UserCreationForm):
	email = forms.EmailField(required=True)
	
	class Meta:
		model = User
		fields = {
			'username',
			'first_name',
			'last_name',
			'email',
			'password1',
			'password2'
		}

	def save(self, commit=True):
		user = super(RegistrationForm, self).save(commit=False)
		user.first_name = self.cleaned_data['first_name']
		user.last_name = self.cleaned_data['last_name']
		user.email = self.cleaned_data['email']

		if commit:
			user.save()

		return user

class SignUpForm(UserCreationForm):
    first_name = forms.CharField(max_length=30, required=False, help_text='Optional.')
    last_name = forms.CharField(max_length=30, required=False, help_text='Optional.')
    email = forms.EmailField(max_length=254, help_text='Required. Inform a valid email address.')

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'password1', 'password2', )

class LoginFrom(forms.Form):
	username = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))
	password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control'}))

