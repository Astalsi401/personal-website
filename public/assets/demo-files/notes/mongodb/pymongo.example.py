import os
from pymongo import MongoClient, InsertOne
from dotenv import load_dotenv
from bson.objectid import ObjectId

load_dotenv()


class Mongodb:
    def __init__(self, db_name: str, user=os.getenv('MONGODB_USER'), password=os.getenv('MONGODB_PASSWORD'), host=os.getenv('MONGODB_HOST'), port=os.getenv('MONGODB_PORT')):
        self.connection = f'mongodb://{user}:{password}@{host}:{port}'
        self.client = MongoClient(self.connection)
        self.db = self.client[db_name]

    def insert_json(self, collection: str, data: list[dict]) -> list:
        self.collection = self.db[collection]
        if len(data) > 0:
            self.collection.bulk_write([InsertOne(obj) for obj in data])

    def insert_one(self, collection: str, data: dict) -> ObjectId:
        self.collection = self.db[collection]
        return self.collection.insert_one(data).inserted_id

    def delete_one(self, collection: str, condition: dict) -> None:
        self.collection = self.db[collection]
        self.collection.delete_one(condition)

    def find(self, collection: str, condition: dict) -> list[dict]:
        self.collection = self.db[collection]
        return list(self.collection.find(condition))

    def find_one(self, collection: str, condition: dict) -> dict:
        self.collection = self.db[collection]
        return self.collection.find_one(condition)

    def sample(self, collection: str, size: int) -> list[dict]:
        self.collection = self.db[collection]
        return list(self.collection.aggregate([{"$sample": {"size": size}}]))

    def update(self, collection: str, condition: dict, new_values: dict) -> None:
        self.collection = self.db[collection]
        self.collection.update_one(condition, {"$set": new_values}, upsert=True)

    def update_many(self, collection: str, condition: dict, new_values: dict) -> None:
        self.collection = self.db[collection]
        self.collection.update_many(condition, {"$set": new_values}, upsert=True)

    def rename(self, collection: str, columns: dict) -> None:
        '''columns = {"old_name": "new_name"}'''
        self.collection = self.db[collection]
        self.collection.update_many({}, {"$rename": columns}, upsert=True)

    def close(self):
        self.client.close()
