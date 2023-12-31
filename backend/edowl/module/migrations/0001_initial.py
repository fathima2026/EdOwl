# Generated by Django 4.2.5 on 2023-12-06 14:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Assignment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.CharField(default='')),
                ('file', models.FileField(blank=True, null=True, upload_to='files/')),
                ('image', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('total_mark', models.IntegerField(default=50)),
                ('created_time', models.TimeField(auto_now=True)),
                ('created_date', models.DateField(auto_now=True)),
            ],
            options={
                'verbose_name_plural': '7. Assignments',
            },
        ),
        migrations.CreateModel(
            name='Hangman',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('words', models.JSONField(blank=True, null=True)),
                ('hints', models.JSONField(blank=True, null=True)),
                ('total_mark', models.IntegerField(default=50)),
                ('created_time', models.TimeField(auto_now=True)),
                ('created_date', models.DateField(auto_now=True)),
                ('due_date', models.DateField(blank=True, null=True)),
            ],
            options={
                'verbose_name': '9. hangman',
            },
        ),
        migrations.CreateModel(
            name='Module',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('code', models.CharField(max_length=255)),
                ('teacher', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.teacher')),
            ],
        ),
        migrations.CreateModel(
            name='Quiz',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('quiz', models.JSONField(blank=True, null=True)),
                ('file', models.FileField(blank=True, null=True, upload_to='')),
                ('total_mark', models.IntegerField(default=50)),
                ('created_time', models.TimeField(auto_now=True)),
                ('created_date', models.DateField(auto_now=True)),
                ('due_date', models.DateField(blank=True, null=True)),
                ('duration', models.IntegerField(default='0')),
                ('module', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='quiz', to='module.module')),
            ],
            options={
                'verbose_name': '8. quiz',
            },
        ),
        migrations.CreateModel(
            name='Topic',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('module', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='module.module')),
            ],
        ),
        migrations.CreateModel(
            name='StudentCourseEnrollment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('enrolled_time', models.TimeField(auto_now=True)),
                ('enrolled_date', models.DateField(auto_now=True)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='enrolled_courses', to='module.module')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='enrolled_students', to='users.student')),
            ],
            options={
                'verbose_name_plural': '6. Enrolled courses',
            },
        ),
        migrations.CreateModel(
            name='QuizSubmission',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(blank=True, null=True, upload_to='')),
                ('marks', models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True)),
                ('remarks', models.CharField(blank=True, null=True)),
                ('completed_time', models.TimeField(auto_now=True)),
                ('completed_date', models.DateField(auto_now=True)),
                ('quiz', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='submitted_quiz', to='module.quiz')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.student')),
            ],
            options={
                'verbose_name': '8. Submitted Quiz',
            },
        ),
        migrations.CreateModel(
            name='HangmanSubmission',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('marks', models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True)),
                ('completed_time', models.TimeField(auto_now=True)),
                ('completed_date', models.DateField(auto_now=True)),
                ('hangman', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='submitted_hangman', to='module.hangman')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.student')),
            ],
            options={
                'verbose_name': '10. Submitted hangman',
            },
        ),
        migrations.AddField(
            model_name='hangman',
            name='module',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='hangman', to='module.module'),
        ),
        migrations.CreateModel(
            name='AssignmentSubmission',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(blank=True, null=True, upload_to='')),
                ('completed_time', models.TimeField(auto_now=True)),
                ('completed_date', models.DateField(auto_now=True)),
                ('marks', models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True)),
                ('remarks', models.CharField(blank=True, null=True)),
                ('assignment', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='submitted_assignments', to='module.assignment')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.student')),
            ],
            options={
                'verbose_name': '8. Submitted assignments',
            },
        ),
        migrations.AddField(
            model_name='assignment',
            name='module',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='assignment', to='module.module'),
        ),
    ]
