from django import forms

from crispy_forms.helper import FormHelper
from crispy_forms.layout import Submit

from .models import Post


class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ("title", "content")

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.helper = FormHelper()
        self.helper.form_id = "postForm"
        self.helper.form_class = "post-form"
        self.helper.form_method = "post"
        self.helper.include_media = True

        self.helper.add_input(Submit("save", "Save"))
