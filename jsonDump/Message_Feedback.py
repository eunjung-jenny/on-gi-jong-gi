from faker import Faker
from random import choice, sample
import json

class Message:
    pk = 1
    def create(self):
        facility_id = choice(range(1,11))
        content = choice(["감사합니다 후원자님", '사랑합니다', '존경합니다', '소중한 후원 소중히 사용하겠습니다', '좋은 인연이 이어지길 바랍니다.'])
        result = {
            "id": self.pk,
            "facility_id": facility_id,
            "content": content
        }
        self.pk += 1
        return result

m = Message()
dummy_message = [m.create() for _ in range(10)]

with open('message.json', 'w', encoding="utf-8") as make_file:
    json.dump(dummy_message, make_file, ensure_ascii=False, indent="\t")
