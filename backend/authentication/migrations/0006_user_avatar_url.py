# Generated by Django 3.2.18 on 2023-03-20 16:12

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        (
            "authentication",
            "0005_merge_0003_auto_20221110_0916_0004_auto_20221110_2259",
        ),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="avatar_url",
            field=models.URLField(blank=True, null=True),
        ),
    ]
