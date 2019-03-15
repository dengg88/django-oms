# -*- coding: utf-8 -*-
# author: itimor

# 登录skype
from skpy import Skype

# skype账号
SK_ACOUNT = {
    'sk_user': 'itimor@oms.com',
    'sk_pass': 'xxxx'
}
# SK = Skype(SK_ACOUNT["sk_user"], SK_ACOUNT["sk_pass"])
SK = 'sk'


def skype_bot(user, content):
    chat = SK.chats[user]
    chat.sendMsg(content)
    for chatId in chat.recent():
        print(chatId)


if __name__ == '__main__':
    skypeid = 'itimor'
    user = '8:' + skypeid  # skypeid 前面需要加 8
    skype_bot(user, 'hello,gay')
