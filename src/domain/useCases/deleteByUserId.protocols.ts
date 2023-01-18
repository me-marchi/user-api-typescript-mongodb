export interface DeleteByUserId {
    deleteById(userId: string): Promise<void>
}
