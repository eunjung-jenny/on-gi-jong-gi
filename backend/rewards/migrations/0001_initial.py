# Generated by Django 2.1.15 on 2020-07-31 18:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Reward',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('max_vol', models.IntegerField()),
                ('net_price', models.IntegerField()),
                ('expire_date', models.DateTimeField()),
                ('success', models.BooleanField(null=True)),
            ],
        ),
    ]