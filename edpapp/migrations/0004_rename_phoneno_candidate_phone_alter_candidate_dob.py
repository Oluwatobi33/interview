# Generated by Django 4.2.14 on 2024-10-29 11:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("edpapp", "0003_rename_phone_candidate_phoneno"),
    ]

    operations = [
        migrations.RenameField(
            model_name="candidate", old_name="phoneno", new_name="phone",
        ),
        migrations.AlterField(
            model_name="candidate", name="dob", field=models.CharField(max_length=15),
        ),
    ]
