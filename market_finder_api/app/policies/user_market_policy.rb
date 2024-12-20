class UserMarketPolicy < ApplicationPolicy
    def create?
      user.present? && record.user_id == user.id
    end
end