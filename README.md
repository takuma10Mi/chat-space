## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## userテーブル

|Column|Type|Options|
|------|----|-------|
|email|string|null: false| 
|password|string|null: falce|
|nickname|string|null: falce|

### Association
- has_many :messages
- has_many :groups

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: falce|
|image|string|
|user_id|integer|null: falce, foreign_key: true|
|group_id|interger|null: falce, foreign_key: true|

### Asociation
- has_many :user
- has_many :group
- has_many :groups_users

### groupテーブル

|Column|Type|Options|
|------|----|-------|
|group|string|null: falce|
|user_id|integer|null: falce, foreign_key: true|
|group_id|interger|null: falce, foreign_key: true|

### Asociation
- has_many :user
- has_many :message
- has_many :groups_users
