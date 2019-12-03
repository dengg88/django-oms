# -*- coding: utf-8 -*-
# author: itimor

import os
DEBUG = True
TIME_ZONE = 'Asia/Shanghai'

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, '../omsBackend.db'),
    }
}

# 开启ldap认证，不开启就注释下面一行
# AUTHENTICATION_BACKENDS = ("django_python3_ldap.auth.LDAPBackend",)

# LDAP_AUTH_URL = "ldap://192.168.6.99:389"
# LDAP_AUTH_SEARCH_BASE = "ou=AllUser,dc=oms,dc=com"
# LDAP_AUTH_CONNECTION_USERNAME = r'oms\admin'
# LDAP_AUTH_CONNECTION_PASSWORD = r'jjyy'

# email账号
MAIL_ACOUNT = {
    "mail_host": "mail@oms.com",
    "mail_user": "admin@oms.com",
    "mail_pass": "jjyy",
    "mail_postfix": "oms.com",
}

# 登录skype
# from skpy import Skype

# skype账号
# SK_ACOUNT = {
#     'sk_user': 'admin@oms.com',
#     'sk_pass': 'jjyy'
# }
# SK = Skype(SK_ACOUNT["sk_user"], SK_ACOUNT["sk_pass"])
# SK = 'skype'
#
# REDIS_URL = 'redis://127.0.0.1:6379/'
# # celery配置
# CELERY_BROKER_URL = REDIS_URL + '0'
#
# # celery结果返回，可用于跟踪结果
# CELERY_RESULT_BACKEND = 'django-db'
#
# # celery内容等消息的格式设置
# CELERY_ACCEPT_CONTENT = ['json']
# CELERY_TASK_SERIALIZER = 'json'
#
# # celery时区设置，使用settings中TIME_ZONE同样的时区
# CELERY_TIMEZONE = TIME_ZONE
#
# CACHES = {
#     "default": {
#         "BACKEND": "django_redis.cache.RedisCache",
#         "LOCATION": REDIS_URL + '1',
#         "OPTIONS": {
#             "CLIENT_CLASS": "django_redis.client.DefaultClient",
#         }
#     }
# }

# saltapi
# salt_info = {
#     "url": "https://1.1.1.11:8888",
#     "username": "saltapi",
#     "password": "123456"
# }
#
# from salts.saltapi import SaltAPI
#
# sapi = SaltAPI(url=salt_info["url"], username=salt_info["username"], password=salt_info["password"])

# try:
#     sapi = SaltAPI(url=salt_info["url"], username=salt_info["username"], password=salt_info["password"])
# except Exception as e:
#     print(e)
#     sapi = 'sapi'

# from zbmanager.zabbix_api import ZabbixApi
#
# zabbix_info = {
#     'apiurl': 'http://zabbix.oms.com/api_jsonrpc.php',
#     'username': 'admin',
#     'password': 'zabbix'
# }
#
# try:
#     zapi = ZabbixApi(zabbix_info["apiurl"], zabbix_info["username"], zabbix_info["password"])
#     zapi.login()
# except:
#     zapi = 'zapi'
