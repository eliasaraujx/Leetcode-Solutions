function merge(nums1, m, nums2, n) {
    let p1 = m - 1;  // Ponteiro para o último elemento válido em nums1
    let p2 = n - 1;  // Ponteiro para o último elemento em nums2
    let p = m + n - 1;  // Ponteiro para a última posição de nums1

    // Mesclando nums1 e nums2 de trás para frente
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }

    // Se ainda restarem elementos em nums2, copie-os para nums1
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
}
