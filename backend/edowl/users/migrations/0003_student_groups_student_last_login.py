# Generated by Django 4.2.5 on 2023-11-22 06:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
        ('users', '0002_remove_student_user_remove_teacher_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='groups',
            field=models.ManyToManyField(blank=True, related_name='student_groups', to='auth.group'),
        ),
        migrations.AddField(
            model_name='student',
            name='last_login',
            field=models.DateTimeField(blank=True, null=True, verbose_name='last login'),
        ),
    ]
