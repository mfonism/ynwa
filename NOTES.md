On making migrations, you'll notice that migrations for the app `filebrowser` aren't included.
You'll have to make them manually.

```bash
python manage.py makemigrations filebrowser
```

Then you can now migrate everything.

```bash
python manage.py migrate
```