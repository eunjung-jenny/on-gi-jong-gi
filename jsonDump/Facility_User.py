from faker import Faker
from random import choice, sample
import pprint
import json
from datetime import datetime
fake = Faker('ko_KR')


# facility
facility_name = fake.company()
description = fake.paragraphs()
address1 = fake.city()
address2 = fake.street_name()
address3 = fake.street_address()
facility_type = choice(['노인복지시설', '아동복지시설', '요양원', '장애인복지시설', '특수교육기관'])
homepage = fake.url()
email = fake.ascii_safe_email()
imgurl = 'https://picsum.photos/200/300'

## dummy facility create

class Facility:
    pk = 1
    def __init__(self, facility_name, description, address1, address2, address3, facility_type, homepage, email, imgurl):
        self.facility_name = facility_name
        self.description = description
        self.address1 = address1
        self.address2 = address2
        self.address3 = address3
        self.facility_type = facility_type
        self.homepage = homepage
        self.imgurl = imgurl
    
    def create(self):
        result = {
            'id': self.pk,
            'name': self.facility_name,
            'description': self.description,
            'address1': self.address1,
            'address2': self.address2,
            'address3': self.address3,
            'type': self.facility_type,
            'homepage': self.homepage,
            'imgurl': self.imgurl
        }
        self.pk += 1
        fake = Faker()
        self.facility_name = fake.company()
        self.description = fake.paragraphs()
        self.address1 = fake.city()
        self.address2 = fake.street_name()
        self.address3 = fake.street_address()
        self.facility_type = choice(['노인복지시설', '아동복지시설', '요양원', '장애인복지시설', '특수교육기관'])
        self.homepage = fake.url()
        self.email = fake.ascii_safe_email()
        self.imgurl = 'https://picsum.photos/200/300'
        return result

F = Facility(facility_name, description, address1, address2, address3, facility_type, homepage, email, imgurl)
dummy_facility = [F.create() for _ in range(10)]

with open('facility.json', 'w', encoding="utf-8") as make_file:
    json.dump(dummy_facility, make_file, ensure_ascii=False, indent="\t")

# user
user = fake.name_male()
email = fake.ascii_safe_email()
card = fake.credit_card_full()
random3 = list(sample(range(1,10),2))
class User:
    pk = 1
    def __init__(self, user, email, card):
        self.user = user
        self.email = email
        self.card = card

    def create(self):
        facility = [dummy_facility[i] for i in random3]
        result = {
            "id" : self.pk,
            'follow': facility,
            "user": self.user,
            "email": self.email,
            "card": self.card
        }
        self.pk += 1
        u = Faker('ko_KR')
        self.user = u.name_male()
        self.email = u.ascii_safe_email()
        self.card = u.credit_card_full()
        return result

## dummy user create
u = User(user, email, card)
dummy_user = [u.create() for _ in range(10)]

with open('user.json', 'w', encoding="utf-8") as make_file:
    json.dump(dummy_user, make_file, ensure_ascii=False, indent="\t")


titles = [
    '당신의 사랑을 보여주세요',
    '아이들에게 책 한권, 선물하세요',
    '장난감을 선물해주세요',
    '저기...라면먹고갈래요?',
    '기부, 어렵지 않아요.'
]

class Reward: 
    def create(self):
        facility = choice(dummy_facility)
        title = choice(titles)
        max_vol = choice(range(50,201))
        net_price = choice([2500,4000,8000,10000,20000,50000,5000,24000,3500,6000,8000])
        expire_date = choice(['2020-08-22', '2020-08-11', '2020-09-07', '2020-08-31', '2020-09-22', '2020=08-06'])
        result = {
            'facility': facility,
            'title': title,
            'max_vol': max_vol,
            'net_price': net_price,
            'expire_date': expire_date, 
            'success': "null"
        }
        
        return result

r = Reward()
dummy_reward = [r.create() for _ in range(10)]

with open('reward.json', 'w', encoding="utf-8") as make_file:
    json.dump(dummy_reward, make_file, ensure_ascii=False, indent="\t")

class Order:
    pk = 1
    def create(self):
        user = choice(dummy_user)
        reward = choice(dummy_reward)
        volume = choice(range(1,41))
        created_at = datetime.now()

        result = {
            'id': self.pk,
            'user': user,
            'reward': reward,
            'volume': volume,
            'created_at': str(created_at)
        }
        self.pk += 1
        return result

o = Order()
dummy_order = [o.create() for _ in range(10)]
with open('order.json', 'w', encoding="utf-8") as make_file:
    json.dump(dummy_order, make_file, ensure_ascii=False, indent="\t")
