# -*- coding: utf-8 -*-
# author: kiven

from rest_framework import viewsets
from threepay.models import Platform, Merchant, ThreePayEnclosure, PayChannelName, PayChannel,ThreePayComment
from threepay.serializers import (PlatformSerializer,
                                  MerchantSerializer,
                                  PayChannelNameSerializer,
                                  PayChannelSerializer,
                                  ThreePayEnclosureSerializer,
                                  ThreePayCommentSerializer)
from django_filters.rest_framework import DjangoFilterBackend

class PlatformViewSet(viewsets.ModelViewSet):
    queryset = Platform.objects.all()
    serializer_class = PlatformSerializer


class MerchantViewSet(viewsets.ModelViewSet):
    queryset = Merchant.objects.all()
    serializer_class = MerchantSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ['platform__name', 'name']


class PayChannelNameViewSet(viewsets.ModelViewSet):
    queryset = PayChannelName.objects.all()
    serializer_class = PayChannelNameSerializer

class PayChannelViewSet(viewsets.ModelViewSet):
    queryset = PayChannel.objects.all()
    serializer_class = PayChannelSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields =['platform__name', 'merchant__name', 'type__name']


class ThreePayEnclosureViewSet(viewsets.ModelViewSet):
    queryset = ThreePayEnclosure.objects.all()
    serializer_class = ThreePayEnclosureSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ['ticket__name']

class ThreePayCommentViewSet(viewsets.ModelViewSet):
    queryset = ThreePayComment.objects.all().order_by('-create_time')
    serializer_class = ThreePayCommentSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ['ticket__id']
